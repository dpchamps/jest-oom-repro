
  describe("some-evil-spec=806", () => {
    it("evil-block-806", () => {
      window.evil_806 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  