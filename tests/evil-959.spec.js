
  describe("some-evil-spec=959", () => {
    it("evil-block-959", () => {
      window.evil_959 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  