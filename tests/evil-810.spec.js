
  describe("some-evil-spec=810", () => {
    it("evil-block-810", () => {
      window.evil_810 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  