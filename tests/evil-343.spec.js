
  describe("some-evil-spec=343", () => {
    it("evil-block-343", () => {
      window.evil_343 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  