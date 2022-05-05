
  describe("some-evil-spec=859", () => {
    it("evil-block-859", () => {
      window.evil_859 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  