
  describe("some-evil-spec=363", () => {
    it("evil-block-363", () => {
      window.evil_363 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  