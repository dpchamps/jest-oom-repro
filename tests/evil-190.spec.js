
  describe("some-evil-spec=190", () => {
    it("evil-block-190", () => {
      window.evil_190 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  