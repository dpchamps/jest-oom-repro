
  describe("some-evil-spec=870", () => {
    it("evil-block-870", () => {
      window.evil_870 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  