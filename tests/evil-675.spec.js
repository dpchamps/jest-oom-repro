
  describe("some-evil-spec=675", () => {
    it("evil-block-675", () => {
      window.evil_675 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  