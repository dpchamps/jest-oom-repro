
  describe("some-evil-spec=981", () => {
    it("evil-block-981", () => {
      window.evil_981 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  