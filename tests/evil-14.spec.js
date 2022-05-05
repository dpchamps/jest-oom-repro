
  describe("some-evil-spec=14", () => {
    it("evil-block-14", () => {
      window.evil_14 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  