
  describe("some-evil-spec=102", () => {
    it("evil-block-102", () => {
      window.evil_102 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  