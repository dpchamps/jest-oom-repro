
  describe("some-evil-spec=935", () => {
    it("evil-block-935", () => {
      window.evil_935 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  