
  describe("some-evil-spec=912", () => {
    it("evil-block-912", () => {
      window.evil_912 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  