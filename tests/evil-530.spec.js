
  describe("some-evil-spec=530", () => {
    it("evil-block-530", () => {
      window.evil_530 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  