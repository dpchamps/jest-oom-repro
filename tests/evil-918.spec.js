
  describe("some-evil-spec=918", () => {
    it("evil-block-918", () => {
      window.evil_918 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  