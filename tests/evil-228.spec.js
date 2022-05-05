
  describe("some-evil-spec=228", () => {
    it("evil-block-228", () => {
      window.evil_228 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  