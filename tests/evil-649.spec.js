
  describe("some-evil-spec=649", () => {
    it("evil-block-649", () => {
      window.evil_649 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  