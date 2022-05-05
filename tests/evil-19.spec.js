
  describe("some-evil-spec=19", () => {
    it("evil-block-19", () => {
      window.evil_19 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  