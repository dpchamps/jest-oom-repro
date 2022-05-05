
  describe("some-evil-spec=98", () => {
    it("evil-block-98", () => {
      window.evil_98 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  