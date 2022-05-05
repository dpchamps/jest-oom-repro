
  describe("some-evil-spec=339", () => {
    it("evil-block-339", () => {
      window.evil_339 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  