
  describe("some-evil-spec=726", () => {
    it("evil-block-726", () => {
      window.evil_726 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  