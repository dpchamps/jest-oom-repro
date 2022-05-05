
  describe("some-evil-spec=341", () => {
    it("evil-block-341", () => {
      window.evil_341 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  